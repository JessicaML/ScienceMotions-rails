import ReactOnRails from "react-on-rails";

import Container from "../bundles/Container/components/Container";
import Lesson from "../bundles/Container/components/Lesson";
import Team from "../bundles/Container/components/team/Team";
import Indicators from "../bundles/Container/components/Indicators";
import DNA from "../bundles/Container/components/DNA";
import CellsTissuesOrgans from "../bundles/Container/components/CellsTissuesOrgans";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Lesson,
  Indicators,
  Team,
  DNA,
  CellsTissuesOrgans,
});
