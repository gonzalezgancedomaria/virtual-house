<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Hotspot extends Model
{
    use HasFactory;

    protected $fillable = [
        'sensor_name',
        'description',
    ];

    public function measureUnit()
    {
        return $this->belongsTo(MeasureUnit::class);
    }
    public static function getAll()
    {
        $hotspots = DB::table('hotspot')->get();
        
        return $hotspots;
    }

    public static function getById($id)
    {
        $hotspot = DB::table('hotspot')
            ->where('hotspot_id', $id)->get();
            
        return $hotspot;
    }

    public static function add(Request $request)
    {
        $hotspot = DB::table('hotspot')->insert([
            'hotspot_id' => $request->hotspot_id,
            'hotspot_name' => $request->hotspot_name,
            'description' => $request->description,
        ]);

        return $hotspot;
    }

    public static function remove($id)
    {
        DB::table('measures')
        ->where('hotspot_id', $id)
        ->delete();

        DB::table('has')
        ->where('hotspot_id', $id)
        ->delete();

        DB::table('configurates')
        ->where('hotspot_id', $id)
        ->delete();

        DB::table('hotspot')
            ->where('hotspot_id', $id)
            ->delete();
    }
}

