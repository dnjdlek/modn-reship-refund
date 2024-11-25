import styled from 'styled-components';

export const LoadingWrapper = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	height: 100%;
	z-index: 99999999;
	background: rgba(0, 0, 0, 0.5);
	.loading {
		position: relative;
		width: 96px;
		height: 96px;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		:after {
			display: block;
			position: absolute;
			content: '';
			width: 52px;
			height: 17px;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center center;
		}
	}
	.circle div {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		width: 76px;
		height: 76px;
		margin: auto;
		background-color: #EFEBFF;
	
		/* border-color: rgba(255, 255, 255, 1) rgba(255, 255, 255, 0.3) */
			rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3);
		border-radius: 50%;
		/* animation: circle 1.4s linear infinite; */
       
	}
    .s-cricle{
        display: flex;
        gap: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        li{
            width: 5px;
            height: 5px;
            background-color: #7C5AFF;
            border-radius: 50%;
            /* margin-top: 1px; */
            transform: translateY(-2px);
            &:first-child{
                animation: upcircle 0.6s ease-in-out  infinite alternate;
            }
            &:nth-child(2){
                animation: twocircle 0.6s ease-in-out 0.2s infinite alternate;
            }
            &:nth-child(3){
                animation: downcircle 0.6s ease-in-out 0.4s infinite alternate;
            }
        }
 }

 @keyframes upcircle {
		0% {
			transform: translateY(-2px)
		}
		/* 40% {
			margin-top: 2px;
		} */
        100% {
			transform: translateY(2px)
        }
	}

    @keyframes twocircle {
		0% {
			transform: translateY(-2px)
		}
		/* 40% {
			margin-top: 2px;
		} */
        100% {
			transform: translateY(2px)
        }
	}
    @keyframes downcircle {
		0% {
			transform: translateY(-2px)
		}
		/* 40% {
			margin-top: 2px;
		} */
        100% {
			transform: translateY(2px)
        }
	}

	@keyframes circle {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
