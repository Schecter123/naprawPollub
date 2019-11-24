<?php

namespace App\Http\Controllers\API;

use App\Image;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;


class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $images = DB::table('images')->get();
        return response()->json($images);
    }

    public function getImageByIdDefect($idDefect)
    {
        $particularImage = DB::table('images')->select('id', 'name', 'type')->where('idDefect', $idDefect)->get();
        return response()->json($particularImage);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = Image::create([
            'name' => $request->file('Image')->getClientOriginalName(),
            'type' => $request->file('Image')->extension(),
            'size' => $request->file('Image')->getClientSize(),
            'idDefect' => $request->idDefect
        ]);

        $request->file('Image')->move(__DIR__ . '/../../../../../client/src/assets/images_upload', $file->id . '.' . $file->type);

        return response()->json($file);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
