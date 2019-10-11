<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:25
 */

namespace App\Dto;


class DefectClass
{

    protected $defectType;
    protected $idPlace;
    protected $idUser;
    protected $idRoom;
    protected $defectState;
    protected $description;
    protected $date;
    protected $photoURL;

    /**
     * DefectClass constructor.
     * @param $defectType
     * @param $idPlace
     * @param $idUser
     * @param $idRoom
     * @param $defectState
     * @param $description
     * @param $date
     * @param $photoURL
     */
    public function __construct($defectType, $idPlace, $idUser, $idRoom, $defectState, $description, $date, $photoURL)
    {
        $this->defectType = $defectType;
        $this->idPlace = $idPlace;
        $this->idUser = $idUser;
        $this->idRoom = $idRoom;
        $this->defectState = $defectState;
        $this->description = $description;
        $this->date = $date;
        $this->photoURL = $photoURL;
    }

    /**
     * @return mixed
     */
    public function getDefectType()
    {
        return $this->defectType;
    }

    /**
     * @return mixed
     */
    public function getIdPlace()
    {
        return $this->idPlace;
    }

    /**
     * @return mixed
     */
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * @return mixed
     */
    public function getIdRoom()
    {
        return $this->idRoom;
    }

    /**
     * @return mixed
     */
    public function getDefectState()
    {
        return $this->defectState;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * @return mixed
     */
    public function getPhotoURL()
    {
        return $this->photoURL;
    }




}