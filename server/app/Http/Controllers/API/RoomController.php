<?php

namespace App\Http\Controllers\API;

use App\Dto\MarkerManager;
use App\Dto\RoomFactory;
use App\Dto\RoomManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = DB::table('rooms')->get();
        return response()->json($rooms);
    }

    public function getRoomsByIdPlace($id)
    {
        $particularRooms = DB::table('rooms')->select('id', 'name')->where('id', $id)->get();
        return response()->json($particularRooms);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newRoom = RoomFactory::create($request->all());
        $result = new RoomManager();
        $result->add($newRoom);
        $lastIdRoom = DB::select(DB::raw("SELECT MAX(id) AS lastIdRoom, idPlace, name FROM rooms"));
        return response()->json($lastIdRoom);
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
        $newRoom = RoomFactory::create($request->all());
        $result = new RoomManager();
        $result->update($newRoom, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('rooms')->where('id', $id)->delete();
    }
}
