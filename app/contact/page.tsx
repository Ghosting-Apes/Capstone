"use client";
import { useForm } from "@mantine/form";
import { Button, Group, TextInput, Textarea } from '@mantine/core';
import React from "react";


export default function Contact() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data: ", form.getValues());
  }

  return (
  <div className="flex flex-col w-full justify-center items-center p-8">
    <form onSubmit={(e) => handleSubmit(e)} className="border-1 border-gray-400 p-10 w-[400]">
      <TextInput
        m={5}
        placeholder="First Name"
        key={form.key('firstName')}
        {...form.getInputProps('firstName')}
      />
      <TextInput
        m={5}
        placeholder="Last Name"
        key={form.key('lastName')}
        {...form.getInputProps('lastName')}
      />
      <TextInput
        m={5}
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Textarea
        m={5}
        required={true}
        placeholder="Comments"
        key={form.key('comments')}
        {...form.getInputProps('comments')}
      />
      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  </div>
  )
}