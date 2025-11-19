import React from 'react';
import config from '../config';

interface LoveKoreanFingerIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name LoveKoreanFingerIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/love-korean-finger)
 * @see {@link https://clicons.dev/icon/love-korean-finger}
 */
const LoveKoreanFingerIcon = React.forwardRef<SVGSVGElement, LoveKoreanFingerIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.605 9.02776L6.20258 4.61605C5.61005 4.02227 5.61539 3.05421 6.21452 2.45382C6.81365 1.85343 7.77968 1.84807 8.37221 2.44185L16.1578 10.1671C18.8161 12.831 20.3484 16.3229 17.3811 19.9313L17.0646 20.2485C14.7342 22.5838 10.9558 22.5838 8.62533 20.2485L5.4366 17.0986C4.84407 16.5048 4.85617 15.53 5.46364 14.9213C6.03949 14.3442 6.94364 14.3033 7.54094 14.8064M10.605 9.02776L13.1141 11.5421M10.605 9.02776C10.0125 8.43398 9.01419 8.44781 8.40407 9.05922C7.79394 9.67062 7.77969 10.6476 8.37222 11.2414L9.10007 11.9708M9.10007 11.9708L10.8838 13.7583M9.10007 11.9708C8.50753 11.377 7.55767 11.4047 6.94755 12.0161C6.33742 12.6275 6.32317 13.6045 6.9157 14.1983L7.54094 14.8064M7.54094 14.8064L8.67132 15.9057M7.54094 14.8064C7.57373 14.834 7.6056 14.8633 7.63644 14.8942M12.1361 6.17661C12.3035 4.63978 14.1236 3.04666 16.3963 4.13842C16.6121 4.2421 16.7831 4.43824 16.7851 4.67806C16.7882 5.06439 16.6186 5.54136 16.075 5.85762C15.2974 6.31003 14.0236 8.03862 15.724 9.7426'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

LoveKoreanFingerIcon.displayName = 'LoveKoreanFingerIcon';
export default LoveKoreanFingerIcon;
