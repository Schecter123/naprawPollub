<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:30
 */

namespace App\Dto;


use App\Room;

class RoomManager
{
    public function add(RoomClass $roomClass)
    {
        $room = new Room;
        $room->idPlace = $roomClass->getIdPlace();
        $room->name = $roomClass->getName();

        $room->save();

    }

    public function update(RoomClass $roomClass, $id)
    {
        $room = Room::find($id);
        $room->idPlace = $roomClass->getIdPlace();
        $room->name = $roomClass->getName();

        $room->save();

    }
}