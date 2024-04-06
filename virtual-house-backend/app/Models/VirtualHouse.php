<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class VirtualHouse {

    private $virtual_house_id;
    private $virtual_house_name;
    private $features;
    private $location;
    private $creation_date;
    private $configuration;

    function __construct($virtual_house_id, $virtual_house_name, $features, $location, $creation_date, $configuration)
    {
        $this->virtual_house_id = $virtual_house_id;
        $this->virtual_house_name = $virtual_house_name;
        $this->features = $features;
        $this->location = $location;
        $this->creation_date = date('dd/mm/YYYY',$creation_date);
        $this->configuration = $configuration;
    }

    public function sensors()
    {
        return $this->belongsToMany(Hotspot::class);
    }

    public static function getAll()
    {
        $virtualHouses = DB::table('virtual_house')->get();
        
        return $virtualHouses;
    }

    public static function getById($id)
    {
        $virtualHouse = DB::table('virtual_house')
            ->where('virtual_house_id', $id)->get();
            
        return $virtualHouse;
    }

    public static function add(Request $request)
    {
        $request->validate([
            'virtual_house_id' => 'required',
            'virtual_house_name' => 'required',
            'features' => 'required',
            'location' => 'required',
            'creation_date' => 'required',
            'configuration' => 'required',
        ]);

        $virtualHouse = DB::table('virtual_house')->insert([
            'virtual_house_id' => $request->virtual_house_id,
            'virtual_house_name' => $request->virtual_house_name,
            'features' => $request->features,
            'location' => $request->location,
            'creation_date' => $request->creation_date,
            'configuration' => $request->configuration,
        ]);

        return $virtualHouse;
    }

    public static function modify(Request $request)
    {
        return DB::table('virtual_house')
            ->where('virtual_house_id', $request->user_id) 
            ->update([
                'virtual_house_id' => $request->virtual_house_id,
                'virtual_house_name' => $request->virtual_house_name,
                'features' => $request->features,
                'location' => $request->location,
                'creation_date' => $request->creation_date,
                'configuration' => $request->configuration,
            ]);
    }


    public static function remove($id)
    {
        DB::table('has')
        ->where('virtual_house_id', $id)
        ->delete();

        DB::table('virtual_house')
            ->where('virtual_house_id', $id)
            ->delete();
    }
}
