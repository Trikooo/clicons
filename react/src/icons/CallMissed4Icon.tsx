import React from 'react';
import config from '../config';

interface CallMissed4IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CallMissed4Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/call-missed4)
 * @see {@link https://clicons.dev/icon/call-missed4}
 */
const CallMissed4Icon = React.forwardRef<SVGSVGElement, CallMissed4IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M15.9212 17.2443L15.931 17.3024C16.0456 17.9806 16.1029 18.3198 16.2809 18.5938C16.3339 18.6753 16.3943 18.7518 16.4613 18.8221C16.6866 19.0586 17.0029 19.1923 17.6356 19.4598C18.5863 19.8617 19.0616 20.0627 19.5176 19.9827C19.6515 19.9592 19.7818 19.9184 19.9053 19.8613C20.3256 19.6669 20.605 19.2259 21.1637 18.344C21.7465 17.4243 22.0378 16.9644 21.9961 16.4396C21.9867 16.3219 21.9561 16.1728 21.9184 16.061C21.7504 15.5621 21.3553 15.2914 20.5653 14.7498C15.2168 11.0834 8.78319 11.0834 3.43474 14.7498C2.64467 15.2914 2.24964 15.5621 2.08155 16.061C2.04388 16.1728 2.0133 16.3219 2.00394 16.4396C1.96217 16.9644 2.25354 17.4243 2.83628 18.344C3.39504 19.2259 3.67442 19.6669 4.09473 19.8613C4.21816 19.9184 4.34846 19.9592 4.48236 19.9827C4.93835 20.0627 5.41371 19.8617 6.36443 19.4598C6.99706 19.1923 7.31337 19.0586 7.5387 18.8221C7.60574 18.7518 7.66613 18.6753 7.7191 18.5938C7.89713 18.3198 7.95443 17.9806 8.06903 17.3024L8.07883 17.2443C8.19712 16.5442 8.25626 16.1941 8.51567 15.8731C8.55197 15.8282 8.61802 15.7569 8.66002 15.7173C8.96021 15.4342 9.22512 15.3686 9.75492 15.2375C11.1819 14.8842 12.8181 14.8842 14.2451 15.2375C14.7749 15.3686 15.0398 15.4342 15.34 15.7173C15.382 15.7569 15.448 15.8282 15.4843 15.8731C15.7437 16.1941 15.8029 16.5442 15.9212 17.2443Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.75 4L7 4.00012L7 7.75M7.43048 4.4306L12 9L17 4.00012'
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
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'square';
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

CallMissed4Icon.displayName = 'CallMissed4Icon';
export default CallMissed4Icon;
