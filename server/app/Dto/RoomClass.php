<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:30
 */

namespace App\Dto;


class RoomClass
{
    protected $idPlace;
    protected $name;

    /**
     * RoomClass constructor.
     * @param $idPlace
     * @param $name
     */
    public function __construct($idPlace, $name)
    {
        $this->idPlace = $idPlace;
        $this->name = $name;
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
    public function getName()
    {
        return $this->name;
    }




}