import React from 'react';
import config from '../config';

interface NThRootCircleIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name NThRootCircleIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/n-th-root-circle)
 * @see {@link https://clicons.dev/icon/n-th-root-circle}
 */
const NThRootCircleIcon = React.forwardRef<SVGSVGElement, NThRootCircleIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M17.5048 8.4856L12.2537 8.4856C11.437 8.4856 11.4844 8.63922 11.3234 9.46327L10.0145 14.5135C9.68244 15.8416 9.28914 15.4713 9.28914 15.4713C8.92914 15.3513 8.87392 15.2098 8.26415 13.9575L7.85415 13.0742C7.5915 12.5348 7.26222 12.5984 7.08189 12.6799C7.08189 12.6799 6.80521 12.7806 6.49805 12.9798M12.997 11.506C13.417 11.4921 13.8643 11.4693 14.0896 11.9238C14.4329 12.6162 14.9494 13.8129 15.1513 14.263C15.2523 14.4361 15.5682 14.4902 15.5682 14.4902C15.8375 14.5248 16.1408 14.5135 16.1408 14.5135M16.3327 11.506C15.4865 11.506 14.9876 12.4814 14.5138 13.0742C13.9045 13.9809 13.4598 14.4902 12.8042 14.5135'
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

NThRootCircleIcon.displayName = 'NThRootCircleIcon';
export default NThRootCircleIcon;
