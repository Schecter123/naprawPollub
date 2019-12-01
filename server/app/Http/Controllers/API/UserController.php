<?php

namespace App\Http\Controllers\API;

use App\User;
use App\Place;
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

    public function updatePassword(Request $request, $id)
    {
        $user = User::find($id);
        $hash = $user->password;
        $oldPassword = $request->input('oldPassword');
        if (password_verify($oldPassword, $hash)) {
            $user->password = bcrypt($request->input('newPassword'));
            $user->save();
        } else {
            return response()->json("nieprawidłowe hasło");
        }
    }

    public function updateType(Request $request, $login)
    {
        DB::table('users')->where('login', $login)->update(['type' => "PlaceAdministrator"]);
        $user = DB::table('users')->where('login', $login)->first();
        DB::table('places')->where('id', $request->input('idPlace'))->update(['idUser' => $user->id]);

        DB::table('follows')->insert(
            ['idPlace' => $request->input('idPlace'), 'idUser' => $user->id]
        );


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
