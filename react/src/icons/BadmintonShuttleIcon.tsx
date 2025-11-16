import React from 'react';
import config from '../config';

interface BadmintonShuttleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name BadmintonShuttleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/badminton-shuttle)
 * @see {@link https://clicons.dev/icon/badminton-shuttle}
 */
const BadmintonShuttleIcon = React.forwardRef<SVGSVGElement, BadmintonShuttleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M3.92723 4.37944C5.01307 3.80898 6.45414 3.52865 7.89521 4.2222C9.94761 1.25927 14.0524 1.25926 16.1048 4.2222C17.5458 3.52867 18.9868 3.80902 20.0727 4.37943C20.575 4.64333 20.8262 4.77528 20.9545 5.15246C21.0827 5.52964 20.9298 5.84896 20.6241 6.48759L16.2167 15.6944C16.0084 16.1294 15.9043 16.347 15.8558 16.5489C15.8073 16.7508 15.794 17.3092 15.7674 18.4261C15.7215 20.3525 14.4794 22 12 22C9.52061 22 8.27855 20.3525 8.23262 18.4261C8.20598 17.3092 8.19267 16.7508 8.14418 16.5489C8.0957 16.347 7.99157 16.1294 7.7833 15.6944L3.37585 6.48751C3.07015 5.84891 2.9173 5.52962 3.04553 5.15244C3.17377 4.77527 3.42492 4.64333 3.92723 4.37944Z'
    }
  ],
  [
    'path',
    {
      d: 'M8 17H16'
    }
  ],
  [
    'path',
    {
      d: 'M8 4L11 17M16 4L13 17'
    }
  ],
  [
    'path',
    {
      d: 'M6 12C7.2 13.3333 8.8 13.3334 10 12C11.2 13.3333 12.8 13.3334 14 12C15.2 13.3333 16.8 13.3334 18 12'
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

BadmintonShuttleIcon.displayName = 'BadmintonShuttleIcon';
export default BadmintonShuttleIcon;
