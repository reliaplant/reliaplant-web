'use client';
import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import FormularioContacto from './FormularioContacto';
import { usePathname } from 'next/navigation';
import { RequestQuote } from '@carbon/icons-react';

interface AbrirFormContactoProps {
    buttonText?: string;
    icon?: React.ReactNode;
    textColor?: string;
    fullDesktop?: boolean;
    modalTitle?: string;
}

const AbrirFormContacto: React.FC<AbrirFormContactoProps & { buttonColor?: string }> = ({
    buttonText = "Solicita una cotización",
    icon = <RequestQuote size={20} className="text-white" />,
    buttonColor = "bg-blue60",
    textColor = "text-white",
    fullDesktop = false,
    modalTitle = "Hablar con un especialista"
}) => {
    const [showModal, setShowModal] = useState(false);
    const pathname = usePathname();

    // Si fullDesktop es true, se usará w-full en escritorio, de lo contrario md:w-fit.
    const desktopClass = fullDesktop ? 'w-full' : 'md:w-fit';

    return (
        <>
            <div className='flex flex-row w-full z-[9999]'>
                <div className={`${desktopClass} w-full`} onClick={() => setShowModal(true)}>
                    <button className={`w-full ${desktopClass} py-3 px-4 font-light text-base md:text-[1.1rem] flex flex-row items-center justify-center md:justify-start gap-4 md:gap-8 ${buttonColor}`}>
                        <span className={textColor}>{buttonText}</span>
                        {icon !== 'none' && icon}
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-[9999] bg-gray90/40">
                    <div className="bg-white p-8 shadow-lg md:w-1/2 w-full md:h-fit h-screen">
                        <div className="mb-6 flex flex-row justify-between items-center">
                            <span className="font-ZenDots text-gray100 text-xl">RELIAPLANT</span>
                            <FiX size={32} className="cursor-pointer" onClick={() => setShowModal(false)} />
                        </div>
                        <div className="mb-4">
                            <h2 className="text-2xl">{modalTitle}</h2>
                        </div>
                        <FormularioContacto
                            type="info"
                            campana=""
                            anuncio={null}
                            interes=""
                            mailchimpTagIn="curso"
                            subject="Nuevo llenado formulario"
                            recipients={['reliaplant@gmail.com']}
                            responsable=""
                            lugar="diplomado"
                            btnText="Solicitar información"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AbrirFormContacto;