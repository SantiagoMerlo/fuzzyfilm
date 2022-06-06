import { useState } from 'react';
import { MovieRowProps } from './types';
import './style.css'
import { Paper } from '../../base';

export default function MovieRow({ movie }: MovieRowProps) {
    return (
        <Paper key={movie.id} className='relative moview-row-card'>
            {movie.image && <img src={movie.image.medium} className='w-full h-full object-cover' />}
            <div className="absolute moview-row-detail bg-white">
                <h6 className="font-bold">{movie.name}</h6>
                <div className='truncate text-sm' dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </div>
        </Paper>
    )
}