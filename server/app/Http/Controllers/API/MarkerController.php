<?php

namespace App\Http\Controllers\API;

use App\Dto\MarkerFactory;
use App\Dto\MarkerManager;
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

    /*Funkcja zwracjąca wszystkie znaczniki*/
    public function getAll()
    {
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

    public function getMarkersByIdPlace($id)
    {
        $particularMarker = DB::table('markers')->where('idPlace', $id)->get();
        return response()->json($particularMarker);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newMarker = MarkerFactory::create($request->all());
        $result = new MarkerManager();
        $result->add($newMarker);
        //return response()->json($newMarker);
        $lastIdMarker = DB::select(DB::raw("SELECT MAX(id) AS lastIdMarker FROM markers"));
        return $lastIdMarker;
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $particularMarker = DB::table('markers')->where('idPlace', $id)->get();
        return response()->json($particularMarker);
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
        $updateMarker = MarkerFactory::create($request->all());
        $result = new MarkerManager();
        $result->update($updateMarker, $id);
        return response()->json($updateMarker);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        DB::table('markers')->where('id', $id)->delete();
    }
}
