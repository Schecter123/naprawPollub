<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DefectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $defects = DB::table('defects')->get();
        return response()->json($defects);
    }

    public function getParticularRoom($id)
    {
        $selectIdRoom = DB::table('defects')->where('id', $id)->value('idRoom');
        $particularRoom = DB::table('rooms')->where('id', $selectIdRoom)->first();

        return response()->json($particularRoom);
    }

    public function getParticularPlace($id)
    {
        $selectIdPlace = DB::table('defects')->where('id', $id)->value('idRoom');
        $particularPlace = DB::table('places')->where('id', $selectIdPlace)->first();

        return response()->json($particularPlace);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
