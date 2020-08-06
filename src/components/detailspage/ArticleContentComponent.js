import React from 'react';
import styled from "styled-components";

const Wrapper = styled('div')`
    padding-right: 15px;
    margin-right: 15px;
    border-right: 1px solid black;
    width: 40%;
`

const TitleSection = styled('div')`
    
`

const Title = styled('div')`
    font-size: 25px;
`

const Description = styled('div')`
    
`

const ContentSection = styled('div')`
    
`

const Content = styled('div')`
    padding-top: 10px;
`

function ArticleContentComponent() {
    return(
      <Wrapper>
          <TitleSection>
              <Title>Article Headline Goes Here</Title>
              <Description>
                  <div>
                      By Author/Photographer/Graphics
                  </div>
                  <div>
                      Publication Date: Month DD, YYYY
                  </div>
              </Description>
          </TitleSection>
          <ContentSection>
              <Content>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas accumsan consectetur. Sed et tincidunt orci. Curabitur gravida, mi eu commodo sollicitudin, augue augue bibendum ligula, vel consequat libero neque placerat purus.
              </Content>
              <Content>
                  Morbi rhoncus eros vitae magna luctus pellentesque ut et libero. Maecenas ut magna augue. Vivamus eget sollicitudin elit, non malesuada metus. Integer fringilla dui vitae turpis pharetra, non fringilla neque bibendum. Sed accumsan diam sed nulla laoreet posuere. Nullam non nisl in lorem facilisis tempus vitae non ligula.
              </Content>
              <Content>
                  Curabitur et neque tempor, volutpat ex sit amet, rutrum quam. Etiam pharetra ante ut quam feugiat accumsan. Ut faucibus enim sit amet elementum vehicula. Vestibulum pulvinar placerat lacinia. Morbi ac gravida nisl. Vivamus ut ullamcorper nisi. Praesent hendrerit molestie purus pulvinar pulvinar.
              </Content>
          </ContentSection>
      </Wrapper>
    );
};

export default ArticleContentComponent;