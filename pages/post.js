import MyLayout from '../components/my-layout';
import fetch from 'isomorphic-unfetch';

export default class extends React.Component {
  static async getInitialProps(context) {
    const {id} = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return {show}
  };

  _showImg = e => {
    console.log('show img!');
  };


  render() {
    const props = this.props;
    return (
      <MyLayout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} onClick={this._showImg}/>
      </MyLayout>
    );
  }

}