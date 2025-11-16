import React from 'react';
import config from '../config';

interface RootFirstBracketIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RootFirstBracketIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/root-first-bracket)
 * @see {@link https://clicons.dev/icon/root-first-bracket}
 */
const RootFirstBracketIcon = React.forwardRef<SVGSVGElement, RootFirstBracketIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M18 8H12.5167C11.7 8 11.46 8.04 11.299 8.86405L9.95406 14.4693C9.62198 15.7974 9.45066 15.9934 9.12 16.02C8.76 15.9 8.58977 15.5923 7.98 14.34L7.63508 13.58C7.37243 13.0406 7.28553 12.813 7.02 12.74C6.62037 12.63 6.30716 12.9408 6 13.14'
    }
  ],
  [
    'path',
    {
      d: 'M13.1035 11.4321C13.5235 11.4182 13.9795 11.4001 14.2291 11.8161C14.5724 12.5085 15.1156 13.9273 15.3175 14.3774C15.4185 14.5505 15.4795 14.7001 15.8395 14.8201C16.1088 14.8547 16.4995 14.8641 16.4995 14.8641'
    }
  ],
  [
    'path',
    {
      d: 'M16.7407 11.4199C15.8945 11.4199 15.3905 12.3659 14.9167 12.9587C14.3074 13.8654 13.6807 14.8799 12.8887 14.8519'
    }
  ],
  [
    'path',
    {
      d: 'M6 3C3.58901 4.93486 2 8.24345 2 12C2 15.7565 3.58901 19.0651 6 21'
    }
  ],
  [
    'path',
    {
      d: 'M18 3C20.411 4.93486 22 8.24345 22 12C22 15.7565 20.411 19.0651 18 21'
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

RootFirstBracketIcon.displayName = 'RootFirstBracketIcon';
export default RootFirstBracketIcon;
