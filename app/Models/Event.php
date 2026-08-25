<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\MeetupGroup;

#[Fillable(['meetup_group_id', 'title', 'slug', 'description', 'location', 'starts_at'])]
class Event extends Model
{
    
    public function meetupGroup(): BelongsTo
    {
        return $this->belongsTo(MeetupGroup::class);
    }
}
