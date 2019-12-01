<?php

namespace App\Http\Controllers\API;

use App\Dto\RatingFactory;
use App\Dto\RatingManager;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class RatingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $ratings = DB::table('ratings')->get();
        return response()->json($ratings);
    }

    public function getSumForDefect($id)
    {
        //$sum = DB::select(DB::raw("SELECT SUM(value) AS sumValues FROM `ratings` WHERE idDefect = $id"));
        $sum = DB::table('ratings')->where('idDefect', $id)->sum('value');
        return response()->json($sum);
    }

    public function getRatingsForUser($idUser)
    {
        $ratings = DB::table('ratings')->where('idUser', $idUser)->get();
        return response()->json($ratings);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newRating = RatingFactory::create($request->all());
        $result = new RatingManager();
        $result->add($newRating);
        $lastIdRating = DB::select(DB::raw("SELECT MAX(id) AS lastIdRating FROM ratings"));
        return response()->json($lastIdRating);
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
