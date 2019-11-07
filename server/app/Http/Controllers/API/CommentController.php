<?php

namespace App\Http\Controllers\API;

use App\Dto\CommentFactory;
use App\Dto\CommentManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = DB::table('comments')->get();
        return response()->json($comments);
    }

    public function getCommentByIdUser($idUser)
    {
        $particularComment = DB::table('comments')->select('id', 'idDefect', 'content', 'date')->where('idUser', $idUser)->get();
        return response()->json($particularComment);
    }

    public function getFollowByIdDefect($idDefect)
    {
        $particularComment = DB::table('comments')->select('id', 'content', 'idUser', 'date')->where('idDefect', $idDefect)->get();
        return response()->json($particularComment);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newComment = CommentFactory::create($request->all());
        $result = new CommentManager();
        $result->add($newComment);
        return response()->json($newComment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $particularComment = DB::table('comments')->where('id', $id)->first();
        return response()->json($particularComment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateComment = CommentFactory::create($request->all());
        $result = new CommentManager();
        $result->update($updateComment, $id);
        return response()->json($updateComment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('comments')->where('id', $id)->delete();
    }
}
