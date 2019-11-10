<?php

namespace App\Http\Controllers\API;

use App\Dto\FollowFactory;
use App\Dto\FollowManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FollowController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $follows = DB::table('follows')->get();
        return response()->json($follows);
    }

    public function getFollowByIdUser($idUser)
    {
        $particularFollow = DB::table('follows')->select('id', 'idPlace')->where('idUser', $idUser)->get();
        return response()->json($particularFollow);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newFollow = FollowFactory::create($request->all());
        $result = new FollowManager();
        $result->add($newFollow);
        return response()->json($newFollow);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $particularFollow = DB::table('follows')->where('id', $id)->first();
        return response()->json($particularFollow);
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
        $updateFollow = FollowFactory::create($request->all());
        $result = new FollowManager();
        $result->update($updateFollow, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('follows')->where('id', $id)->delete();
    }
}
