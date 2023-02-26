import React, { Component } from "react";
import "./posts.css";
import PostHome from "./post/post-home/PostHome";

class Posts extends Component {
  state = {
    posts1: [
      {
        id: 1,
        title: "Hard noon",
        type: "text",
        content:
          "And produce say the ten moments parties. Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything. ",
      },
      {
        id: 2,
        title: "Prince's Sanctuary",
        type: "text",
        content:
          "Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting. ",
      },
      {
        id: 3,
        title: "The stranger in the west",
        type: "text",
        content:
          "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so dispatched as it increasing pianoforte. Hearing now saw perhaps minutes herself his. Of instantly excellent therefore difficult he northward. Joy green but least marry rapid quiet but. Way devonshire introduced expression saw travelling affronting. Her and effects affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening. ",
      },
      {
        id: 4,
        title: "The brute in the dark city",
        type: "text",
        content:
          "By spite about do of do allow blush. Additions in conveying or collected objection in. Suffer few desire wonder her object hardly nearer. Abroad no chatty others my silent an. Fat way appear denote who wholly narrow gay settle. Companions fat add insensible everything and friendship conviction themselves. Theirs months ten had add narrow own. ",
      },
      {
        id: 6,
        title: "Shot of menace",
        type: "text",
        content:
          "Gave read use way make spot how nor. In daughter goodness an likewise oh consider at procured wandered. Songs words wrong by me hills heard timed. Happy eat may doors songs. Be ignorant so of suitable dissuade weddings together. Least whole timed we is. An smallness deficient discourse do newspaper be an eagerness continued. Mr my ready guest ye after short at. ",
      },
    ],
    posts2: [
      {
        id: 7,
        title: "2099: Alpha",
        type: "text",
        content:
          "Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses and put better end. Sincerity collected happiness do is contented. Sigh ever way now many. Alteration you any nor unsatiable diminution reasonable companions shy partiality. Leaf by left deal mile oh if easy. Added woman first get led joy not early jokes. ",
      },
      {
        id: 8,
        title: "The obsidian shore",
        type: "text",
        content:
          "Nor hence hoped her after other known defer his. For county now sister engage had season better had waited. Occasional mrs interested far expression acceptance. Day either mrs talent pulled men rather regret admire but. Life ye sake it shed. Five lady he cold in meet up. Service get met adapted matters offence for. Principles man any insipidity age you simplicity understood. Do offering pleasure no ecstatic whatever on mr directly. ",
      },
      {
        id: 9,
        title: "End of Kaus",
        type: "text",
        content:
          "Ought these are balls place mrs their times add she. Taken no great widow spoke of it small. Genius use except son esteem merely her limits. Sons park by do make on. It do oh cottage offered cottage in written. Especially of dissimilar up attachment themselves by interested boisterous. Linen mrs seems men table. Jennings dashwood to quitting marriage bachelor in. On as conviction in of appearance apartments boisterous.",
      },
      {
        id: 10,
        title: "2105: Liberation",
        type: "text",
        content:
          "Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe. Up nature valley do warmly. Entered of cordial do on no hearted. Yet agreed whence and unable limits. Use off him gay abilities concluded immediate allowance. ",
      },
      {
        id: 11,
        title: "The blighted flame",
        type: "text",
        content:
          "Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight. Sang lose of hour then he left find. ",
      },
    ],
    posts3: [
      {
        id: 12,
        title: "Threat of iron",
        type: "text",
        content:
          "Imagine was you removal raising gravity. Unsatiable understood or expression dissimilar so sufficient. Its party every heard and event gay. Advice he indeed things adieus in number so uneasy. To many four fact in he fail. My hung it quit next do of. It fifteen charmed by private savings it mr. Favourable cultivated alteration entreaties yet met sympathize. Furniture forfeited sir objection put cordially continued sportsmen. ",
      },
      {
        id: 13,
        title: "The last widow",
        type: "text",
        content:
          "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. ",
      },
      {
        id: 14,
        title: "Blade of destiny",
        type: "text",
        content:
          "Of on affixed civilly moments promise explain fertile in. Assurance advantage belonging happiness departure so of. Now improving and one sincerity intention allowance commanded not. Oh an am frankness be necessary earnestly advantage estimable extensive. Five he wife gone ye. Mrs suffering sportsmen earnestly any. In am do giving to afford parish settle easily garret. ",
      },
      {
        id: 15,
        title: "Twisted shadow",
        type: "text",
        content:
          "Old unsatiable our now but considered travelling impression. In excuse hardly summer in basket misery. By rent an part need. At wrong of of water those linen. Needed oppose seemed how all. Very mrs shed shew gave you. Oh shutters do removing reserved wandered an. But described questions for recommend advantage belonging estimable had. Pianoforte reasonable as so am inhabiting. Chatty design remark and his abroad figure but its. ",
      },
      {
        id: 16,
        title: "Scoundrel's tears",
        type: "text",
        content:
          "Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. ",
      },
    ],
  };

  componentDidMount() {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition > 300) {
      window.scrollTo(0, parseInt(scrollPosition));
      sessionStorage.removeItem("scrollPosition");
    } else {
      window.scrollTo(0, parseInt(0, 0));
    }
  }

  onViewPost() {
    sessionStorage.setItem("scrollPosition", window.pageYOffset);
  }

  render() {
    return (
      <div className="Posts">
        <div className="posts-wrapper">
          <div className="posts-column">
            {this.state.posts1.map((post) => (
              <PostHome
                onViewPost={this.onViewPost}
                key={post.id}
                post={post}
              />
            ))}
          </div>

          <div className="posts-column">
            {this.state.posts2.map((post) => (
              <PostHome
                onViewPost={this.onViewPost}
                key={post.id}
                post={post}
              />
            ))}
          </div>

          <div className="posts-column">
            {this.state.posts3.map((post) => (
              <PostHome
                onViewPost={this.onViewPost}
                key={post.id}
                post={post}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
