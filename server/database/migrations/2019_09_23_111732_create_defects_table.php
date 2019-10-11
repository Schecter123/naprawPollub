<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDefectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('defects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->enum('defectType', ['Computers', 'Infrastructure', 'Electronic', 'Hydraulic', 'Mechanical', 'Others']);
            $table->unsignedBigInteger('idPlace');
            $table->foreign('idPlace')->references('id')->on('places')->onDelete('cascade');
            $table->unsignedBigInteger('idUser');
            $table->foreign('idUser')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('idRoom');
            $table->foreign('idRoom')->references('id')->on('rooms')->onDelete('cascade');
            $table->unsignedBigInteger('idMarker');
            $table->foreign('idMarker')->references('id')->on('markers')->onDelete('cascade');
            $table->enum('defectState', ['ForRepair', 'Repaired', 'RepairInProgress', 'WontBeRepaired']);
            $table->string('description');
            $table->dateTime('date');
            $table->text('photoURL')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('defects');
    }
}
