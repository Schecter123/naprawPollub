<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = DB::table('users')->get();
        return response()->json($users);
    }

    public function getUserByLogin($login)
    {
        $particularUser = DB::table('users')->where('login', $login)->first();
        return response()->json($particularUser);
    }

    public function getUserByDefect($idDefect)
    {
        $particularUser = DB::select(DB::raw("SELECT users.id, users.login, users.email, users.name, users.surname
FROM defects, users
WHERE defects.id = $idDefect AND defects.idUser = users.id"));
        return response()->json($particularUser);
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
        $particularUser = DB::table('users')->where('id', $id)->first();
        return response()->json($particularUser);
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
        DB::table('users')->where('id', $id)->delete();
    }
}
