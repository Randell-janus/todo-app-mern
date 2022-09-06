import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../features/todos/todosSlice";

export default function EditModal({ isOpen, onClose, todo }) {
  const dispatch = useDispatch();

  const [body, setBody] = useState();
  const [duration, setDuration] = useState();

  const handleEdit = (e) => {
    e.preventDefault();

    if (!body || !duration || duration < 1) return;

    if (body === todo.body && parseInt(duration) === todo.duration) {
      onClose();
      return;
    }

    dispatch(editTodo({ _id: todo._id, body, duration }));
    onClose();
  };

  useEffect(() => {
    setBody(todo.body);
    setDuration(todo.duration);
  }, [todo]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md rounded-md bg-white p-8 text-left shadow transition-all space-y-6">
                  <h2 className="font-semibold">Update Todo</h2>

                  <form onSubmit={handleEdit} className="space-y-4">
                    <div className="space-y-1 w-full">
                      <h3>Task:</h3>
                      <textarea
                        onKeyPress={(e) => {
                          if (e.key === "Enter") e.preventDefault();
                        }}
                        onChange={(e) => setBody(e.target.value)}
                        type="text"
                        name="body"
                        className="input-primary"
                        value={body}
                        required
                      />
                    </div>

                    <div className="space-y-1 flex-1">
                      <h3>Duration:</h3>
                      <input
                        onChange={(e) => setDuration(e.target.value)}
                        type="number"
                        name="duration"
                        min="1"
                        className="input-primary"
                        value={duration}
                        required
                      />
                    </div>

                    <div className="flex justify-end space-x-3">
                      <button className="btn-primary">Save</button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
