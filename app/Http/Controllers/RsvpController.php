<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RsvpController extends Controller
{
    public function store(Event $event): RedirectResponse
    {
        $event->users()->syncWithoutDetaching([auth()->id()]);

        return back();
    }

    public function destroy(Event $event): RedirectResponse
    {
        $event->users()->detach(auth()->id());
        
        return back();
    }
}
