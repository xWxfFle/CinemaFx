import { EffectorNext } from '@effector/next'
import { allSettled, fork, serialize } from 'effector'
import { attachLogger } from 'effector-logger'
import { useUnit } from 'effector-react'
import { $filmsToday, filmPageStarted, filmsFetched } from '@/app/model'
import { FilmCard } from '@/components/ui/film-card'

export async function generateStaticParams() {
  const scope = fork()

  await allSettled(filmPageStarted, { scope })

  const list = scope.getState($filmsToday)

  return list?.map((brewery) => ({ id: brewery.id }))
}

export default async function Page() {
  const scope = fork()

  const values = serialize(scope)

  attachLogger()

  return (
    <EffectorNext values={values}>
      <main>
        <FilmCard image="/Barbie.jpg" />
      </main>
    </EffectorNext>
  )
}
