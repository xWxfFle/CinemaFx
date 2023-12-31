import { createEffect, createEvent, createStore, sample } from 'effector'
import { Film } from '@/types'

export const filmPageStarted = createEvent()

export const $filmsToday = createStore<null | Film[]>(null)

export const filmsFetched = createEvent()

const fetchFilmsFx = createEffect(() =>
  fetch('https://shift-backend.onrender.com/cinema/today').then((req) =>
    req.json()
  )
)

sample({
  clock: filmsFetched,
  source: fetchFilmsFx.doneData,
  target: $filmsToday,
})

sample({
  clock: filmPageStarted,
  target: filmsFetched,
})
