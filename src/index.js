import { h, app } from 'hyperapp'
import { h1, a, hr, button, div, span } from '@hyperapp/html'
import $ from 'jquery'
import popper from 'popper.js' // required by bootstrap
import * as Bootstrap from 'bootstrap'

const state = {
  count: 0,
  bootstrapDocs: 'https://getbootstrap.com/docs/4.0/getting-started/introduction/'
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

const view = (state, actions) =>
  div({ class: 'container' }, [
    h1('Parcel, Hyperapp and Bootstrap'),
    hr(),
    h1(state.count),
    div({ class: 'btn-group' }, [
      button({ class: 'btn btn-primary', onclick: () => actions.down(1) }, '–'),
      button({ class: 'btn btn-primary', onclick: () => actions.up(1) }, '+')
    ]),
    span(
      {
        class: 'test',
        onclick: () => {
          console.log($('.new').html())
        }
      },
      div({ class: 'new' }, [a({ href: state.bootstrapDocs }, 'Bootstrap Docs')])
    )
  ])

const main = app(state, actions, view, document.body)
