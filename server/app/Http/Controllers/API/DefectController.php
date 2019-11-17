<?php

namespace App\Http\Controllers\API;

use App\Defect;
use App\Dto\DefectFactory;
use App\Dto\DefectManager;
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
        $selectIdPlace = DB::table('defects')->where('id', $id)->value('idPlace');
        $particularPlace = DB::table('places')->where('id', $selectIdPlace)->first();

        return response()->json($particularPlace);
    }

    public function getDefectByLogin($login)
    {
        $particularDefect = DB::select(DB::raw("SELECT defects.id,defects.defectType,defects.idPlace,defects.idUser,defects.idRoom,defects.idMarker,defects.defectState,defects.description,defects.date
        FROM defects WHERE defects.idUser IN(SELECT users.id FROM users WHERE users.login = '$login')"));
        return response()->json($particularDefect);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newDefect = DefectFactory::create($request->all());
        $result = new DefectManager();
        $result->add($newDefect);
        $lastIdDefect = DB::select(DB::raw("SELECT MAX(id) AS lastIdDefect FROM defects"));
        return response()->json($lastIdDefect);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $particularDefect = DB::table('defects')->where('id', $id)->first();
        return response()->json($particularDefect);
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
        $updateDefect = DefectFactory::create($request->all());
        $result = new DefectManager();
        $result->update($updateDefect, $id);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('defects')->where('id', $id)->delete();

    }
}
