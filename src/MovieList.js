import React, {Component} from 'react'
import Card from './Card'

class MoviesList extends Component{
    state = {
        movies : this.props.movies
    }

    newItem = () => {
        // si no cambiamos al estado con setState jamás se pintarán los cambios
        this.setState({
            movies: [
                // ...this.state.movies extrae cada uno de los elementos, la coma y el nuevo elemento
                // son para mutar al arreglo principal, esto significa que siempre crea uno nuevo a partir del original con los cambios.
                ...this.state.movies,
                {title: "Harry Potter", director: "Chris Columbus"}
            ]
        })
    }
  render(){
      return <div>
        <ul>
            { this.state.movies.map((e,i) => <Card key={i} {...e}/>) }
        </ul>
        <button onClick={this.newItem}>add new movie</button>
    </div>
  }
}

export default MoviesList