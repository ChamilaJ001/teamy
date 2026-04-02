'use client'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../ui/input';
import { Field, FieldError, FieldLabel } from '../ui/field';
import { workspaceSchema } from '@/schemas/workspace';
import { zodResolver } from '@hookform/resolvers/zod';

const CreateWorkspace = () => {
    const [open, setOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(workspaceSchema),
        defaultValues: {
            name: "",
        },
    })

    function onSubmit() {
        console.log("data")
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <Button variant='ghost' size='icon' className='cursor-pointer size-12 rounded-md border-2 border-dashed 
                            border-muted-foreground/50 hover:border-muted-foreground hover:text-foreground transition-all duration-200'>
                                <Plus className='size-5' />
                            </Button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent side='right'>
                        <p className='text-sm font-semibold'>Create Workspace</p>
                    </TooltipContent>
                </Tooltip>

                <DialogContent className='sm:max-w-[425px]'>
                    <DialogHeader>
                        <DialogTitle>Create Workspace</DialogTitle>
                        <DialogDescription>Create a new workspace to get started.</DialogDescription>
                    </DialogHeader>

                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                                    <Input
                                        {...field}
                                        id={field.name}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="My Workspace"
                                    />
                                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                                </Field>
                            )}
                        />

                        <div className='flex justify-end mt-3'>
                            <Button type='submit' className='cursor-pointer'>Create Workspace</Button>
                        </div>
                    </form>
                </DialogContent>

            </TooltipProvider>
        </Dialog>
    )
}

export default CreateWorkspace