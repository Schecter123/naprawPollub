<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class MarkerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $markers = DB::select(DB::raw("SELECT markers.id, markers.latitude, markers.longitude, markers.idPlace, markers.info, COUNT(defects.idMarker) AS numberOfMarkers
FROM markers, defects
WHERE markers.id = defects.idMarker
GROUP BY markers.id, markers.latitude, markers.longitude, markers.idPlace, markers.info
ORDER BY markers.id"));

        return response()->json($markers);

    }

    public function getAll()
    {
        echo('test');
        $markers = DB::table('markers')->get();
        return response()->json($markers);
    }

    public function getDefectCount($id)
    {
        $defectCount = DB::select(DB::raw("SELECT COUNT(defects.idMarker) AS numberOfMarkers
        FROM markers, defects
        WHERE markers.id = defects.idMarker AND markers.id = $id
        GROUP BY markers.id, markers.latitude, markers.longitude, markers.idPlace, markers.info"));

        return response()->json($defectCount);


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
