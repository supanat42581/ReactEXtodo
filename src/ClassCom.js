import React from "react"
// import './ClassCom.css'

class Class1 extends React.Component {
    state = {
        count: 0,
        color: true,
        text: "",
        data: [],

    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    submit = (e) => {
        e.preventDefault()
        let move = [...this.state.data, { text: this.state.text, toggle: false }]
        this.setState({ data: move, text: "" })
    }
    delete = (index) => {
        let arr = [...this.state.data]
        // arr.splice(index, 1)
        arr = arr.filter((ele, idx) => idx !== index)
        // idx === index
        this.setState({ data: arr })
    }
    toggle = (index) => {
        let arr = [...this.state.data]

        if (arr[index].toggle === false) {
            arr = arr.map((obj, idx) => index === idx ? { ...obj, toggle: true } : obj)
            this.setState({ data: arr })
        } else {
            arr = arr.map((obj, idx) => index === idx ? { ...obj, toggle: false } : obj)
            this.setState({ data: arr })
        }


    }

    render() {
        let { data: d, age } = {data:"property from Class1",age:2}
        let style = {
            fontSize: "20px",
            color: "blue"
        }
        return (<div style={style}>class component {d}
            <p>age: {age}</p>
            {<h3 onClick={() => {
                this.state.color ? this.setState({ color: false }) : this.setState({ color: true })
            }} style={{ color: this.state.color ? "brown" : "navy" }}>this.state.count</h3>}
            {this.state.count}
            <div>

                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={() => this.setState({ count: 0 })}>reset</button>
            </div>
            <form onSubmit={this.submit}>
                <input type="text" value={this.state.text} onChange={e => { this.setState({ text: e.target.value }) }} />
            </form>
            <ul>
                {this.state.data.map((obj, index) =>
                    <li key={index} className="li" style={{ textDecoration: this.state.data[index].toggle ? "line-through" : "none" }}>
                        <label for={`check${index}`} key={index} >
                            <input onClick={() => this.toggle(index)} type="checkbox" id={`check${index}`} />
                        {obj.text}</label>
                        <button onClick={() => this.delete(index)}>x</button></li>)}
            </ul>
        </div>)
    }
}

export default Class1


{/* <input type="checkbox" id="a"/> <label for="a">{.....}</label> */}
{/* <label> <input /> </label> */}

