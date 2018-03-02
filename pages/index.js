import withRedux from "next-redux-wrapper";
import initStore from "../store";
import PageTitle from "../components/PageTitle";
import PeopleTableContainer from "../components/PeopleTableContainer";
import Web3Wrapper from "../components/Web3Wrapper";
import contractDefinition from "../services/contracts/SimpleStorage.json";

const PeopleTableContainerWithWeb3 = Web3Wrapper(
  PeopleTableContainer,
  contractDefinition
);

const IndexPage = () => (
  <div>
    <PageTitle text="Hello World" />
    <PeopleTableContainerWithWeb3 />
  </div>
);

export default withRedux(initStore)(IndexPage);