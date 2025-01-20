import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Linkto() {
    const [isTechHovered, setTechHovered] = useState(false); // Track hover state for TechBlog
    const [isPoliticsHovered, setPoliticsHovered] = useState(false); // Track hover state for PoliticsBlog

    const linkRefTech = useRef(null); // Reference for TechBlog link
    const linkRefPolitics = useRef(null); // Reference for PoliticsBlog link
    const divRefTech = useRef(null); // Reference for TechBlog hover div
    const divRefPolitics = useRef(null); // Reference for PoliticsBlog hover div

    // Mouse move handler to detect if the mouse moves outside of the hover area
                         // Mouse move handler to detect if the mouse moves outside of the hover area
const handleMouseMove = (e, refLink, refDiv, setHoverState) => {
    if (refLink.current) {
        const linkRect = refLink.current.getBoundingClientRect();
        const divRect = refDiv.current?.getBoundingClientRect(); // Optional chaining to avoid null error

        // Check if the mouse is outside the link or the div by 10px
        if (
            (e.clientX < linkRect.left - 10 || e.clientX > linkRect.right + 10 || e.clientY < linkRect.top - 10 || e.clientY > linkRect.bottom + 10) &&
            (!divRect || (e.clientX < divRect.left || e.clientX > divRect.right || e.clientY < divRect.top || e.clientY > divRect.bottom))
        ) {
            setHoverState(false); // Set hover state to false if the mouse is outside
            document.removeEventListener("mousemove", (event) => handleMouseMove(event, refLink, refDiv, setHoverState)); // Remove event listener
        }
    }
};


    // Show the div when hovering over the TechBlog link
    const handleMouseEnterTechBlog = () => {
        setPoliticsHovered(false); // Reset politics hover if it's true
        setTechHovered(true);
        document.addEventListener("mousemove", (e) => handleMouseMove(e, linkRefTech, divRefTech, setTechHovered));
    };

    const handleMouseLeaveTechBlog = (e) => {
        const related = e.relatedTarget;
        if (!related || !(related instanceof Element) || !related.classList.contains("hover-effect")) {
            setTechHovered(true);
            document.removeEventListener("mousemove", (event) => handleMouseMove(event, linkRefTech, divRefTech, setTechHovered));
        }
    };

    // Show the div when hovering over the PoliticsBlog link
    const handleMouseEnterPolitics = () => {
        setTechHovered(false); // Reset tech hover if it's true
        setPoliticsHovered(true);
        document.addEventListener("mousemove", (e) => handleMouseMove(e, linkRefPolitics, divRefPolitics, setPoliticsHovered));
    };

    const handleMouseLeavePolitics = (e) => {
        const related = e.relatedTarget;
        if (!related || !(related instanceof Element) || !related.classList.contains("politicsHover")) {
            setPoliticsHovered(true);
            document.removeEventListener("mousemove", (event) => handleMouseMove(event, linkRefPolitics, divRefPolitics, setPoliticsHovered));
        }
    };

    // Div hover handling for TechBlog
    const handleMouseEnterDivTechBlog = () => {
        setTechHovered(true);
    };

    const handleMouseLeaveDivTechBlog = (e) => {
        const related = e.relatedTarget;
        if (!related || !(related instanceof Element) || !related.classList.contains("hover-effect")) {
            setTechHovered(false);
        }
    };

    // Div hover handling for PoliticsBlog
    const handleMouseEnterDivPolitics = () => {
        setPoliticsHovered(true);
    };

    const handleMouseLeaveDivPolitics = (e) => {
        const related = e.relatedTarget;
        if (!related || !(related instanceof Element) || !related.classList.contains("politicsHover")) {
            setPoliticsHovered(false);
        }
    };

    return (
        <>
            <div      className="Linkto"      >

                <Link to="/">Home</Link>

                <Link
                    to="/Tech"
                    onMouseEnter={handleMouseEnterTechBlog}
                    onMouseLeave={handleMouseLeaveTechBlog}
                    ref={linkRefTech}
                >
                    TechBlog
                </Link>

                <Link
                    to="/PoliticsBlog"
                    onMouseEnter={handleMouseEnterPolitics}
                    onMouseLeave={handleMouseLeavePolitics}
                    ref={linkRefPolitics}
                >
                    PoliticsBlog
                </Link>

                <Link to="/BuildBlog">BuildBlog
                </Link>
                <Link to="/Register">Register
                </Link>
                <Link to="/Login">Login
                </Link>

                <Link   to="/Blogs"  >Blogs</Link>
                <Link to="/PopularBlog">PopularBlog</Link>


                {/* Div for TechBlog link */}
                {isTechHovered && (
                    <div
                        className="hover-effect"
                        onMouseEnter={handleMouseEnterDivTechBlog}
                        onMouseLeave={handleMouseLeaveDivTechBlog}
                        ref={divRefTech}
                    >
                        <p>This is the TechBlog content.</p>
                        <div >
                            <table>
                                <tr  style={{justifyContent:"space-evenly"}}  >
                                    <td>Electronics</td>
                                    <td>Computer</td>
                                    <td>This is Electronics</td>
                                    <td>this is Computer</td>
                                </tr>

                                <tr>
                                <td>Electronics</td>
                                    <td>Computer</td>
                                    <td>This is Electronics</td>
                                    <td>this is Computer</td>
                                </tr>

                            </table>
                     
                         </div>
                    </div>
                )}

                {/* Div for PoliticsBlog link */}
                {isPoliticsHovered && (
                    <div
                        className="politicsHover"
                        onMouseEnter={handleMouseEnterDivPolitics}
                        onMouseLeave={handleMouseLeaveDivPolitics}
                        ref={divRefPolitics}
                    >
                        <p>This is the PoliticsBlog content.</p>
                    </div>
                )}
            </div>
        </>
    );
}

export default Linkto;
