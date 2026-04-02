import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils';

const workspaces = [
    {
        id: 1,
        name: 'Bravo',
        avatar: 'BR',
    },
    {
        id: 2,
        name: 'Charlie',
        avatar: 'CH',
    },
    {
        id: 3,
        name: 'Echo',
        avatar: 'EC',
    },
]

const colorCombinations = [
    'bg-blue-500 hover:bg-blue-600 text-white',
    'bg-emerald-500 hover:bg-emerald-600 text-white',
    'bg-purple-500 hover:bg-purple-600 text-white',
    'bg-amber-500 hover:bg-amber-600 text-white',
    'bg-pink-500 hover:bg-pink-600 text-white',
    'bg-orange-500 hover:bg-orange-600 text-white',
    'bg-indigo-500 hover:bg-indigo-600 text-white',
    'bg-teal-500 hover:bg-teal-600 text-white',
    'bg-cyan-500 hover:bg-cyan-600 text-white',
    'bg-sky-500 hover:bg-sky-600 text-white',
    'bg-rose-500 hover:bg-rose-600 text-white',
];

const getWorkspaceColor = (id: string) => {
    const charSum = id.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return colorCombinations[charSum % colorCombinations.length];
}

const WorkspaceList = () => {
    return (
        <TooltipProvider>
            <div className='flex flex-col gap-2'>
                {workspaces.map((workspace) => (
                    <Tooltip key={workspace.id}>
                        <TooltipTrigger asChild>
                            <Button size='icon'
                                className={cn('size-12 transition-all duration-200 cursor-pointer', getWorkspaceColor(workspace.id.toString()))}
                            >
                                <span className='text-sm font-semibold'>{workspace.avatar}</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p className='text-sm font-semibold'>{workspace.name}</p>
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default WorkspaceList