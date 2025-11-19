import React from 'react';
import config from '../config';

interface RotateRight5IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name RotateRight5Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/rotate-right5)
 * @see {@link https://clicons.dev/icon/rotate-right5}
 */
const RotateRight5Icon = React.forwardRef<SVGSVGElement, RotateRight5IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.716 11.0603L20.4255 8.47863C21.0401 8.05088 21.1853 7.20299 20.7499 6.58481C20.3144 5.96663 19.4631 5.81226 18.8485 6.24001L11.4295 11.4033L10.8484 11.7974L10.8793 9.25823C10.8793 8.34813 10.0867 7.64009 9.1803 7.74059C8.4868 7.81749 7.93329 8.35291 7.83461 9.04228L7.19239 13.5287C7.04665 14.5469 6.97377 15.056 7.01031 15.5447C7.06604 16.2902 7.30653 17.0102 7.71016 17.64C7.97472 18.0528 8.33908 18.4165 9.06782 19.1438L10.6036 20.6764C12.1244 22.1942 14.5061 22.4326 16.2986 21.2464L19.5922 19.067L19.9631 18.8088C20.5778 18.3811 20.723 17.5332 20.2875 16.915C19.852 16.2968 19.0008 16.1424 18.3862 16.5702L18.0152 16.8284M16.716 11.0603L15.6032 11.8348M16.716 11.0603C17.3306 10.6325 18.1819 10.7869 18.6173 11.4051C19.0528 12.0233 18.9076 12.8711 18.293 13.2989L17.5511 13.8152M17.5511 13.8152L17.1801 14.0734M17.5511 13.8152C18.1657 13.3875 19.017 13.5419 19.4524 14.16C19.8879 14.7782 19.7427 15.6261 19.1281 16.0539L18.7571 16.312'
    }
  ],
  [
    'path',
    {
      d: 'M14.6362 4.96465C14.2393 5.3603 12.5127 5.24616 11.8758 5.16671M14.6362 4.96465C15.0331 4.56901 15.0445 2.63697 14.9648 2.00208M14.6362 4.96465C13.6152 3.19642 9.55562 0.375875 5.52724 3.19642C3.58057 4.55942 3.30588 5.41838 2.99804 5.99381'
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

RotateRight5Icon.displayName = 'RotateRight5Icon';
export default RotateRight5Icon;
