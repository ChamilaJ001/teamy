import CreateWorkspace from '@/components/workspace/CreateWorkspace'
import UserNav from '@/components/workspace/UserNav'
import WorkspaceList from '@/components/workspace/WorkspceList'
import React from 'react'

const WorkspaceLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex w-full h-screen'>
            <div className='flex h-full w-16 flex-col items-center bg-secondary py-3 px-2 border-r border-b'>
                <WorkspaceList />

                <div className='mt-4'>
                    <CreateWorkspace />
                </div>

                <div className='mt-auto'>
                    <UserNav />
                </div>
            </div>
            {children}
        </div>
    )
}

export default WorkspaceLayout