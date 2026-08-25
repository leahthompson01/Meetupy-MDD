<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::query()
        ->with(['meetupGroup.user'])
        ->where('starts_at', '>=', now())
        ->orderBy('starts_at')
        ->get();

        return Inertia::render('events/index', [
            'events' => $events,
        ]);
    }
}
