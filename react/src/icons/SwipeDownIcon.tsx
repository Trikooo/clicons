import React from 'react';
import config from '../config';

interface SwipeDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwipeDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swipe-down)
 * @see {@link https://clicons.dev/icon/swipe-down}
 */
const SwipeDownIcon = React.forwardRef<SVGSVGElement, SwipeDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22'
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

SwipeDownIcon.displayName = 'SwipeDownIcon';
export default SwipeDownIcon;
