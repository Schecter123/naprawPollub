<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:27
 */

namespace App\Dto;


class FollowClass
{
    protected $idPlace;
    protected $idUser;

    /**
     * FollowClass constructor.
     * @param $idPlace
     * @param $idUser
     */
    public function __construct($idPlace, $idUser)
    {
        $this->idPlace = $idPlace;
        $this->idUser = $idUser;
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




}