const Clock = () => (
    <svg id='clock' viewBox='-100 -100 200 200'>
        <defs>
            <path id='thin-line' d='M 0 -90 V -88'/>
            <path id='thick-line' d='M 0 -90 V -86'/>
            <g id='line-group'>
                <use href='#thick-line'/>
                <use href='#thin-line' transform='rotate(6)'/>
                <use href='#thin-line' transform='rotate(12)'/>
                <use href='#thin-line' transform='rotate(18)'/>
                <use href='#thin-line' transform='rotate(24)'/>
            </g>
            <path id='hinge' d='M 0 -2.5 a 2.5 2.5 0 0 0 0 5 a 2.5 2.5 0 0 0 0 -5 V -10'/>
        </defs>
        <use href='#line-group'/>
        <use href='#line-group' transform='rotate(30)'/>
        <use href='#line-group' transform='rotate(60)'/>
        <use href='#line-group' transform='rotate(90)'/>
        <use href='#line-group' transform='rotate(120)'/>
        <use href='#line-group' transform='rotate(150)'/>
        <use href='#line-group' transform='rotate(180)'/>
        <use href='#line-group' transform='rotate(210)'/>
        <use href='#line-group' transform='rotate(240)'/>
        <use href='#line-group' transform='rotate(270)'/>
        <use href='#line-group' transform='rotate(300)'/>
        <use href='#line-group' transform='rotate(330)'/>
        <g id='minutes-hand'>
            <use href='#hinge'/>
            <path d='M 0 -10 a 3 3 0 0 0 3 -3 V -57 a 3 3 0 0 0 -3 -3 a 3 3 0 0 0 -3 3 V -13 a 3 3 0 0 0 3 3'/>
        </g>
        <g id='hours-hand'>
            <use href='#hinge'/>
            <path d='M 0 -10 a 3 3 0 0 0 3 -3 V -37 a 3 3 0 0 0 -3 -3 a 3 3 0 0 0 -3 3 V -13 a 3 3 0 0 0 3 3'/>
        </g>
        <path id='seconds-hand' d='M 0 15 V 2 a 2 2 0 0 0 0 -4 a 2 2 0 0 0 0 4 M 0 -2 V -75'/>
    </svg>
)

export default Clock