import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Featured from "./components/Featured/Featured";
import Headline from "./components/Headline/Headline";
import Default from "./components/Default/Default";
import Divider from "./components/Divider/Divider";
import Loader from "./components/Loader/Loader";

class App extends React.Component {
    state = {
        data: [],
        isLoading: true
    };
    componentDidMount() {
        this.getNews();
        this.timerID = setInterval(() => this.getNews(), 30000);
    }
    getNews = async () => {
        const news_call = await fetch(
            "https://gustavukaz.pythonanywhere.com/api/articles/"
        );
        // const news_call = await fetch(process.env.REACT_APP_API);
        const apidata = await news_call.json();
        this.setState(() => {
            return {
                data: apidata.results,
                isLoading: false
            };
        });
    };
    render() {
        if (!this.state.isLoading) {
            return (
                <div className="App">
                    <Navbar />
                    <div className="container m-5 px-5 mx-auto">
                        <div className="row">
                            <Featured data={this.state.data} />
                            {this.state.data.slice(1, 3).map(data => (
                                <Headline data={data} key={data.title} />
                            ))}
                            <Divider />
                            {this.state.data.slice(3, 6).map(data => (
                                <Default data={data} key={data.title} />
                            ))}
                        </div>
                    </div>
                </div>
            );
        } else {
            return <Loader />;
        }
    }
}
export default App;
