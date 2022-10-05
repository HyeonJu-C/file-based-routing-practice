# Events Application

## file based routing - practice

### 1. routes

    1. starting page(/)
    2. all events page(/events)
    3. event detail page(/events:id)
    4. filtered events by duration(/events/...slug)

### 2. starting page

    1. 주요 이벤트 만을 필터링 한 리스트 렌더링
    2. 헤더에는 starting page로 이동하는 링크와, events page로 이동하는 링크가 있음.

### 3. all events page

    1. 모든 이벤트 리스트 렌더링
    2. 상단에는 year, month를 선택한 뒤 버튼을 클릭하면 필터링 기능을 적용할 수 있음.

### 4. event detail page

    1. 모든 이벤트 카드에는 explore event 버튼이 있음.
    2. 모든 이벤트마다 detail page를 가지고 있음.
