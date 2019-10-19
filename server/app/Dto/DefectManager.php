<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:26
 */

namespace App\Dto;


use App\Defect;
use Illuminate\Support\Facades\DB;

class DefectManager
{
    public function add(DefectClass $defectClass)
    {
        $defect = new Defect;
        $defect->defectType = $defectClass->getDefectType();
        $defect->idPlace = $defectClass->getIdPlace();
        $defect->idUser = $defectClass->getIdUser();
        $defect->idRoom = $defectClass->getIdRoom();
        $defect->idMarker = $defectClass->getIdMarker();
        $defect->defectState = $defectClass->getDefectState();
        $defect->description = $defectClass->getDescription();
        $defect->date = $defectClass->getDate();
        $defect->photoURL = $defectClass->getPhotoURL();

        $defect->save();
    }

    public function update(DefectClass $defectClass, $id)
    {

        $defect = Defect::find($id);
        $defect->defectType = $defectClass->getDefectType();
        $defect->idPlace = $defectClass->getIdPlace();
        $defect->idUser = $defectClass->getIdUser();
        $defect->idRoom = $defectClass->getIdRoom();
        $defect->idMarker = $defectClass->getIdMarker();
        $defect->defectState = $defectClass->getDefectState();
        $defect->description = $defectClass->getDescription();
        $defect->date = $defectClass->getDate();
        $defect->photoURL = $defectClass->getPhotoURL();

        $defect->save();


    }
}