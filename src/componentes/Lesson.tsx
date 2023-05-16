import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { NavLink } from "react-router-dom"


interface LessonProps {
    title: string,
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' de 'yyyy", {
        locale: ptBR,
    })

    return (
        <NavLink to={`/blogpage/post/${props.slug}`} className='group'>
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>

            <div className="rounded-sm border border-gray-100 p-4 mt-2 group-hover:border-green-800 group-hover:border-x-4  ">
                
                <div className=' justify-center items-center gap-4'>
                    <span className=' text-gray-50 pr-40' >
                        xxxxxxxxxxii
                    </span>
                    <span className=" text-xs rounded py-[0.125rem] px-2 text-gray-600 border border-green-800 font-bold ">
                        {props.type === 'live' ? 'Importante!' : 'Novidade!'}
                    </span>
                </div>

                <strong className="text-blue-900 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </NavLink>
    )
}