import HeaderMainPage from "./HeaderMain";
import HairstylePage from "./Hairstyle";
import ActualHairstylePage from "./ActualHairstyle";
import MastersMainPage from "./MastersMain";
import ReviewsPage from "./Reviews";
import { ReactNode, useState } from "react";
import DoReviewPage from "./DoReview";


function MainPage () {
    const [currentPage, setCurrentPage] = useState(0);

    const pages: ReactNode[] = [
        <ReviewsPage ReviewsPageActionBack={() => setCurrentPage(1)}/>,
        <DoReviewPage DoReviewsPageActionBack={() => setCurrentPage(0)}/>
    ];
    return(
        <div>
            <HeaderMainPage/>
            <HairstylePage/>
            <ActualHairstylePage/>
            <MastersMainPage/>
            <div>{pages[currentPage]}</div>
        </div>
    )
}
export default MainPage