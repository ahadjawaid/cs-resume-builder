"use client"
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react'
import { navigationLinks } from "@/config";

function HamburgerMenu() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-10 group flex items-center justify-center rounded-md focus:outline-none"
          >
            {
              open ?
              <XMarkIcon className='w-7 h-7' aria-hidden="true" /> :
              <Bars3Icon className='w-7 h-7' aria-hidden="true" />
              
            }
            <span className='hidden'>Menu Button</span>
          </Popover.Button>
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50 opacity-100" />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="fixed right-5">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className={`relative grid ${navigationLinks.length == 0 ? "" : "p-7"} gap-8 bg-white lg:grid-cols-2`}>
                  {navigationLinks.map(({ name, href }, key: number) => (
                    <a
                      key={key}
                      href={href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="">
                        <p className="text-sm font-medium text-gray-900">
                          {name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* <div className="bg-gray-50 p-4">
                  {props.user ? (
                    <button
                      onClick={props.handleSignOut}
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                        <span className="text-sm font-medium text-gray-900">
                          Sign Out
                        </span>
                    </button>) : (
                    <a
                      href={paths.signIn}
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                        <span className="text-sm font-medium text-gray-900">
                          Sign In
                        </span>
                    </a>)
                  }
                </div> */}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default HamburgerMenu;